import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oyjt3db7r.css';

const viewBox = {"width":24,"height":24};
const content = `<rect vector-effect="non-scaling-stroke" class="oyjt3db7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:home-button"} {...others} />);
}

export default Component;
