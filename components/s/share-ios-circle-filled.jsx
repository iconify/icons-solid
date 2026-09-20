import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/b/bzjbox_2i.css';
import '../../css/y/yh8j1i27z.css';
import '../../css/a/ao0t6hy0j.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGFZj0ixTg"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path class="bzjbox_2i"/><path class="yh8j1i27z"/><path class="ao0t6hy0j"/></g></mask></defs><circle mask="url(#SVGFZj0ixTg)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:share-ios-circle-filled"} {...others} />);
}

export default Component;
