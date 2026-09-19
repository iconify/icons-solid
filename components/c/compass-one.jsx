import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/r/r5tlskk2v.css';
import '../../css/y/y_x-crbnf.css';
import '../../css/a/au_gpv-5l.css';
import '../../css/v/v6w04hs7p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGqHRGH4FD"><g class="s9cl3zbei"><path class="r5tlskk2v"/><path class="y_x-crbnf"/><path class="au_gpv-5l"/><path class="v6w04hs7p"/></g></mask></defs><path mask="url(#SVGqHRGH4FD)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:compass-one"} {...others} />);
}

export default Component;
