import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/mzszod_2j.css';
import '../../css/c/c45mhr9-t.css';
import '../../css/i/i4m-rlb1z.css';
import '../../css/f/f8pr247sv.css';
import '../../css/y/ycvy21jmk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG6JKoKepx"><g class="s9cl3zbei"><circle class="mzszod_2j"/><path class="c45mhr9-t"/><circle class="i4m-rlb1z"/><path class="f8pr247sv"/><path class="ycvy21jmk"/></g></mask></defs><path mask="url(#SVG6JKoKepx)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:death-star"} {...others} />);
}

export default Component;
