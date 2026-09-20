import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o58hkebvg.css';
import '../../css/p/psbkcqb3f.css';
import '../../css/y/y5pnz-y8q.css';
import '../../css/x/x89gikkiv.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGLPWcmdDk"><g class="o58hkebvg"><path class="psbkcqb3f"/><path class="y5pnz-y8q"/><path class="x89gikkiv"/></g></mask></defs><path mask="url(#SVGLPWcmdDk)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:basket-alt-duotone-line"} {...others} />);
}

export default Component;
