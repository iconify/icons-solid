import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bs4r2bbgt.css';

const viewBox = {"width":25,"height":24};
const content = `<path clip-rule="evenodd" class="bs4r2bbgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:flower-2"} {...others} />);
}

export default Component;
