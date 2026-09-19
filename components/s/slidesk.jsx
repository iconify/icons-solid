import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gt3ooeb1p.css';
import '../../css/y/y66p4r9gc.css';
import '../../css/u/ujatxybje.css';
import '../../css/a/ashn9cb5e.css';
import '../../css/y/ym0_asezx.css';

const viewBox = {"width":16,"height":16};
const content = `<ellipse class="gt3ooeb1p"/><ellipse class="y66p4r9gc"/><path class="ujatxybje"/><path class="ashn9cb5e"/><path class="ym0_asezx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:slidesk"} {...others} />);
}

export default Component;
