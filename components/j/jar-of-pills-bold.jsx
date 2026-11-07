import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/em3p83bvs.css';
import '../../css/a/a7uahqbqs.css';
import '../../css/b/bqzidgs3h.css';
import '../../css/n/nrkqveb2f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="em3p83bvs"/><path clip-rule="evenodd" class="a7uahqbqs"/><path class="bqzidgs3h"/><path class="nrkqveb2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:jar-of-pills-bold"} {...others} />);
}

export default Component;
