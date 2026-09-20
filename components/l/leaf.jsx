import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ooetkb5ox.css';

const viewBox = {"width":24,"height":24,"left":-3.5,"top":-1};
const content = `<path class="ooetkb5ox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:leaf"} {...others} />);
}

export default Component;
