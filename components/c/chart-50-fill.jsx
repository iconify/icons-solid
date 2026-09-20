import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6eb6zbaw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d6eb6zbaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:chart-50-fill"} {...others} />);
}

export default Component;
