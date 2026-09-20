import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/c/c9tgtdbcx.css';
import '../../css/a/ap0kgpb5t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="c9tgtdbcx"/><path class="ap0kgpb5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:medical-box"} {...others} />);
}

export default Component;
