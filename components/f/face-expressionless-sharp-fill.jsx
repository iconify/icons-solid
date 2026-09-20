import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g2--ctuld.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g2--ctuld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:face-expressionless-sharp-fill"} {...others} />);
}

export default Component;
