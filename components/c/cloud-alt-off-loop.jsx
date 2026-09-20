import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5xdmn.css';
import '../../css/t/tlk1uw.css';
import '../../css/d/dqkmes.css';
import '../../css/b/botfzx.css';
import '../../css/g/gcgjwr.css';
import '../../css/d/d-gf8qwu.css';
import '../../css/s/so-from-60.css';
import '../../css/s/so-to-0.css';
import '../../css/d/d-jqytza.css';
import '../../css/d/d-qnzcbl.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGFtk2wc7c"><path class="c5xdmn tlk1uw"/><path class="c5xdmn dqkmes"/></mask></defs><path mask="url(#SVGFtk2wc7c)" class="botfzx"/><path class="c5xdmn gcgjwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:cloud-alt-off-loop"} {...others} />);
}

export default Component;
