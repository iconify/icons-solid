import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p8f5tl6jz.css';
import '../../css/r/r7uu-9y7g.css';
import '../../css/l/lctcwxbfm.css';
import '../../css/j/j5k34_byv.css';
import '../../css/k/kwqa4-bds.css';
import '../../css/s/sm5k__3ca.css';
import '../../css/g/g7gsq4buj.css';
import '../../css/x/xi94s3bdy.css';
import '../../css/v/vsmabt--q.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="p8f5tl6jz"/><path class="r7uu-9y7g"/><path class="lctcwxbfm"/><path class="j5k34_byv"/><path class="kwqa4-bds"/><path class="sm5k__3ca"/><path class="g7gsq4buj"/><path class="xi94s3bdy"/><path class="vsmabt--q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:deaf-person-medium-light-skin-tone"} {...others} />);
}

export default Component;
