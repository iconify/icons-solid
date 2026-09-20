import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bjjo0nbkw.css';
import '../../css/z/z0uh4cbbm.css';
import '../../css/y/ywpt9tc6d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bjjo0nbkw"/><path class="z0uh4cbbm"/><path class="ywpt9tc6d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:logo-android"} {...others} />);
}

export default Component;
