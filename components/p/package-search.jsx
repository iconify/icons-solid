import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mnrl3ibde.css';
import '../../css/c/c6vm4iasj.css';
import '../../css/a/azzo_79pk.css';
import '../../css/o/o7tc-9b2f.css';
import '../../css/y/y4zg4_xvf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mnrl3ibde"/><path class="c6vm4iasj"/><circle class="azzo_79pk"/><path class="o7tc-9b2f"/><path class="y4zg4_xvf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:package-search"} {...others} />);
}

export default Component;
