import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/h/htz74t92u.css';
import '../../css/a/au6sz-bex.css';
import '../../css/b/bdbkw7e2c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="htz74t92u"/><path class="au6sz-bex"/><path class="bdbkw7e2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:id-picture-1"} {...others} />);
}

export default Component;
