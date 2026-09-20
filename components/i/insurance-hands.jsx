import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/u/u5s3sjh5i.css';
import '../../css/e/evfape6gb.css';
import '../../css/z/zepxq8nkd.css';
import '../../css/c/c82y2k39f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="u5s3sjh5i"/><path class="evfape6gb"/><path class="zepxq8nkd"/><path class="c82y2k39f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:insurance-hands"} {...others} />);
}

export default Component;
