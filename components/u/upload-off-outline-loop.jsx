import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5xdmn.css';
import '../../css/q/qu8zmn.css';
import '../../css/z/zxndow.css';
import '../../css/o/okiwoc.css';
import '../../css/u/u89kyy.css';
import '../../css/b/botfzx.css';
import '../../css/r/ro5uup.css';
import '../../css/d/d-viliiy.css';
import '../../css/s/so-from-20.css';
import '../../css/s/so-to-0.css';
import '../../css/d/d-l5brra.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGDi4r333N"><path class="c5xdmn qu8zmn zxndow"/><path class="c5xdmn okiwoc zxndow"/><path class="c5xdmn u89kyy"/></mask></defs><path mask="url(#SVGDi4r333N)" class="botfzx"/><path class="c5xdmn ro5uup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:upload-off-outline-loop"} {...others} />);
}

export default Component;
