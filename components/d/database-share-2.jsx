import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/e/eq6_uhfdm.css';
import '../../css/w/w9eb10orv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="eq6_uhfdm"/><path class="w9eb10orv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:database-share-2"} {...others} />);
}

export default Component;
