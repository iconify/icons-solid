import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sk1g1aczw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sk1g1aczw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:left-right-fill"} {...others} />);
}

export default Component;
