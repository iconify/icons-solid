import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvdw8qbce.css';
import '../../css/f/f1llgs4zz.css';
import '../../css/s/sxw6orb1m.css';
import '../../css/c/c7b_kvtiu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dvdw8qbce"/><circle class="f1llgs4zz"/><circle class="sxw6orb1m"/><circle class="c7b_kvtiu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:unordered-list"} {...others} />);
}

export default Component;
