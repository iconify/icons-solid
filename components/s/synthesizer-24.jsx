import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rgxo6jbsv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rgxo6jbsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:synthesizer-24"} {...others} />);
}

export default Component;
