import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dgxr_vbkp.css';
import '../../css/s/sqek1dbgt.css';
import '../../css/z/zud_bnb5e.css';
import '../../css/y/yjgom1b6y.css';
import '../../css/h/hct9zqbco.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="dgxr_vbkp"/><path class="sqek1dbgt"/><path class="zud_bnb5e"/><path class="yjgom1b6y"/><path class="hct9zqbco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:uzbekistan"} {...others} />);
}

export default Component;
