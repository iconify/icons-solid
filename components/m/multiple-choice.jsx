import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1snc1dry.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="t1snc1dry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:multiple-choice"} {...others} />);
}

export default Component;
