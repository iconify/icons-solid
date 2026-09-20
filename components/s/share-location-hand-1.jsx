import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a1tlu_bkd.css';
import '../../css/y/ye7sbfbsd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="a1tlu_bkd"/><path class="ye7sbfbsd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:share-location-hand-1"} {...others} />);
}

export default Component;
