import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ja7ltjp0f.css';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/btlxfkbwh.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGeEBWIcGE" class="ja7ltjp0f"/></defs><g clip-rule="evenodd" class="n1lsf0bnc"><path class="btlxfkbwh"/><use href="#SVGeEBWIcGE"/><use href="#SVGeEBWIcGE"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:gallery-check"} {...others} />);
}

export default Component;
