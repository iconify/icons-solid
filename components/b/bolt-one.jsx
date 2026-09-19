import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/z/zow-3zwzb.css';
import '../../css/p/pg_5h5m7z.css';
import '../../css/y/ywu8tfbvo.css';
import '../../css/e/e9m95gfak.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG4isBwcig"><g class="s9cl3zbei"><path class="zow-3zwzb"/><path class="pg_5h5m7z"/><path class="ywu8tfbvo"/><path class="e9m95gfak"/></g></mask></defs><path mask="url(#SVG4isBwcig)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:bolt-one"} {...others} />);
}

export default Component;
