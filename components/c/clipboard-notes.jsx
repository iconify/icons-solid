import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/utd3f6fhw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="utd3f6fhw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:clipboard-notes"} {...others} />);
}

export default Component;
