import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z671n4b7f.css';
import '../../css/o/o9b3pqbor.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="z671n4b7f"/><path class="o9b3pqbor"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:download-bold"} {...others} />);
}

export default Component;
