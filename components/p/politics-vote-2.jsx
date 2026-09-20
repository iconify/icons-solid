import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/y54hdz9nm.css';
import '../../css/k/ksqc4ebwe.css';
import '../../css/j/j9z4gwbpv.css';
import '../../css/n/nxzsibcbf.css';
import '../../css/x/xsahr0b6i.css';
import '../../css/w/wsl0w39hu.css';
import '../../css/a/aelyh0b-u.css';
import '../../css/u/uf93a7wew.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="y54hdz9nm"/><path class="ksqc4ebwe"/><path class="j9z4gwbpv"/><path class="nxzsibcbf"/><path class="xsahr0b6i"/><path class="wsl0w39hu"/><path class="aelyh0b-u"/><path class="uf93a7wew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:politics-vote-2"} {...others} />);
}

export default Component;
