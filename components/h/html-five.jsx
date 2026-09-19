import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/y/y27kjc42t.css';
import '../../css/o/odd5su9rz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG5shBabjy"><g class="s9cl3zbei"><path class="y27kjc42t"/><path class="odd5su9rz"/></g></mask></defs><path mask="url(#SVG5shBabjy)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:html-five"} {...others} />);
}

export default Component;
