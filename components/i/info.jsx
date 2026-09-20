import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/axarcbb2r.css';
import '../../css/w/wp23mgbqq.css';
import '../../css/f/fqg7gacch.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="axarcbb2r"/><path class="wp23mgbqq"/><circle class="fqg7gacch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:info"} {...others} />);
}

export default Component;
