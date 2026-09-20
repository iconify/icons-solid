import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bn9ma7box.css';
import '../../css/u/u6ect5bic.css';
import '../../css/w/w3051s3ye.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bn9ma7box"/><path class="u6ect5bic"/><path class="w3051s3ye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:bilibili-logo"} {...others} />);
}

export default Component;
