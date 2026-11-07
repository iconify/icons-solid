import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sjwt09onl.css';
import '../../css/x/xo-a06wvd.css';
import '../../css/b/bzx8_jbar.css';
import '../../css/g/gup1u2bvx.css';
import '../../css/a/aw0ixqbjo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sjwt09onl"/><path class="xo-a06wvd"/><path clip-rule="evenodd" class="bzx8_jbar"/><path clip-rule="evenodd" class="gup1u2bvx"/><path clip-rule="evenodd" class="aw0ixqbjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:closet-bold"} {...others} />);
}

export default Component;
