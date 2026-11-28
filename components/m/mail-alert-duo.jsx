import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9g84w8dg.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v7v0zjbzo.css';
import '../../css/a/aivyodbgw.css';
import '../../css/t/tyvm07bwl.css';
import '../../css/c/c5gnibcgy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s9g84w8dg secondary"/><g class="dt0cm9dhy primary"><path class="v7v0zjbzo"/><path class="aivyodbgw"/><path class="tyvm07bwl"/><path class="c5gnibcgy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:mail-alert-duo"} {...others} />);
}

export default Component;
