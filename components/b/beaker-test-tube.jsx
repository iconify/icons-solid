import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/x/xno80eb-s.css';
import '../../css/a/a6qb4wb3u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="xno80eb-s"/><path class="a6qb4wb3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:beaker-test-tube"} {...others} />);
}

export default Component;
