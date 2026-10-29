import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pyi7vqbkj.css';
import '../../css/b/bar6-jb7u.css';
import '../../css/g/g9rotpu1e.css';
import '../../css/z/zz5zdqb7z.css';
import '../../css/w/w9l-bvx8e.css';
import '../../css/e/eutks2zwa.css';
import '../../css/f/fm5gmibbe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pyi7vqbkj wm-shadow"/><path class="bar6-jb7u wm-k"/><path class="g9rotpu1e wm-k"/><path class="wm-k zz5zdqb7z"/><path class="w9l-bvx8e wm-k"/><path class="eutks2zwa wm-k"/><path class="fm5gmibbe wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:square"} {...others} />);
}

export default Component;
