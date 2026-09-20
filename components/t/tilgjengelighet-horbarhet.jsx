import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gk1vdrbbx.css';
import '../../css/v/v038z-9jt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gk1vdrbbx"/><path class="v038z-9jt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:tilgjengelighet-horbarhet"} {...others} />);
}

export default Component;
