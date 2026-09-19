import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/emylgjb0y.css';
import '../../css/r/rbak6zq5p.css';
import '../../css/z/zxys3pw6q.css';
import '../../css/z/zkwmf0bbe.css';

const viewBox = {"width":32,"height":32};
const content = `<defs/><path class="emylgjb0y"/><path class="rbak6zq5p"/><path class="zxys3pw6q"/><path class="zkwmf0bbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:barrier"} {...others} />);
}

export default Component;
