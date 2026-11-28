import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vuuowfrjf.css';
import '../../css/p/pjssjrx3c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary vuuowfrjf"/><path class="pjssjrx3c primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:stroke-line-join-round-duo"} {...others} />);
}

export default Component;
