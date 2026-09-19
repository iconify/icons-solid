import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/btx7j3qro.css';
import '../../css/p/pfijng4-x.css';

const viewBox = {"width":15,"height":16};
const content = `<path class="btx7j3qro"/><path class="pfijng4-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:filedoc"} {...others} />);
}

export default Component;
