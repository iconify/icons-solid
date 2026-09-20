import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/u/uvght3btf.css';
import '../../css/y/yeglzqixq.css';
import '../../css/d/dja5cgbxd.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVG7m4d0bGg"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="uvght3btf"/><path class="yeglzqixq"/><path class="dja5cgbxd"/></g></mask></defs><circle mask="url(#SVG7m4d0bGg)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:dollar-circle-filled"} {...others} />);
}

export default Component;
