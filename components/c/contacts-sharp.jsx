import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xlpsj4bqw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xlpsj4bqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:contacts-sharp"} {...others} />);
}

export default Component;
