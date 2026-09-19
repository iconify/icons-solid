import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/q/q-pm_ssno.css';
import '../../css/i/i4559bctz.css';
import '../../css/t/txzs0m_je.css';
import '../../css/a/aya7jobqq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGXzdaRc6H"><g class="wwvp95byt"><path clip-rule="evenodd" class="q-pm_ssno"/><path class="i4559bctz"/><path class="txzs0m_je"/><path class="aya7jobqq"/></g></mask></defs><path mask="url(#SVGXzdaRc6H)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:building-four"} {...others} />);
}

export default Component;
