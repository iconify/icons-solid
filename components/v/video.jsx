import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/p/p22wnqbnw.css';
import '../../css/q/qcxk7gt6m.css';
import '../../css/l/ljwwyjb-f.css';
import '../../css/r/r_ox37bby.css';
import '../../css/j/jxacbfbej.css';
import '../../css/n/nsaay5gbc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGGtJqeeph"><g class="ufeehvblu"><path class="p22wnqbnw"/><path class="qcxk7gt6m"/><path class="ljwwyjb-f"/><path class="r_ox37bby"/><path class="jxacbfbej"/><path class="nsaay5gbc"/></g></mask></defs><path mask="url(#SVGGtJqeeph)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:video"} {...others} />);
}

export default Component;
