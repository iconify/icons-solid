import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r1zaul45c.css';
import '../../css/b/bz4uy7g-m.css';
import '../../css/y/y_smit_jj.css';
import '../../css/h/hd9q669kx.css';
import '../../css/g/gdb3h0h5s.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="r1zaul45c"/><path class="bz4uy7g-m"/><path class="y_smit_jj"/><path class="hd9q669kx"/><path class="gdb3h0h5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:zambia"} {...others} />);
}

export default Component;
