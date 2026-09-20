import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z64uonb3l.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="z64uonb3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:praying-hand-remix"} {...others} />);
}

export default Component;
