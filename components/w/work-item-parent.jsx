import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/emsxux5lw.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="emsxux5lw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:work-item-parent"} {...others} />);
}

export default Component;
