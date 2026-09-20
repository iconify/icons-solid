import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5xdmn.css';
import '../../css/i/izvovy.css';
import '../../css/z/zxndow.css';
import '../../css/f/f-8s9h.css';
import '../../css/g/grlnmu.css';
import '../../css/y/yl0nmc.css';
import '../../css/b/botfzx.css';
import '../../css/f/f59n3y.css';
import '../../css/s/so-from-22.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGdzvYAcqY"><path class="c5xdmn izvovy zxndow"/><path class="c5xdmn f-8s9h zxndow"/><path class="c5xdmn grlnmu yl0nmc"/></mask></defs><path mask="url(#SVGdzvYAcqY)" class="botfzx"/><path class="c5xdmn f59n3y yl0nmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:person-off"} {...others} />);
}

export default Component;
