import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yyfe3ob5n.css';
import '../../css/h/hxxrwcb9s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary yyfe3ob5n"/><path class="hxxrwcb9s primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ribbon-duo"} {...others} />);
}

export default Component;
