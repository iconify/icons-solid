import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ajgz9zbmt.css';
import '../../css/y/yb07jsz1d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ajgz9zbmt"/><path class="yb07jsz1d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:package-fill"} {...others} />);
}

export default Component;
