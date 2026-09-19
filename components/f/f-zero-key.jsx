import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/h9qj9o6mz.css';
import '../../css/t/t1337kq_z.css';
import '../../css/e/elttmdb8p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG1yyEZbSz"><g class="aql7dnt-u"><rect class="h9qj9o6mz"/><rect class="t1337kq_z"/><path class="elttmdb8p"/></g></mask></defs><path mask="url(#SVG1yyEZbSz)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:f-zero-key"} {...others} />);
}

export default Component;
