import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cmtk6db6i.css';
import '../../css/v/vpakukbgd.css';
import '../../css/z/zrsocu2vi.css';
import '../../css/u/uk8tuqbzp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cmtk6db6i"/><path class="vpakukbgd"/><path class="zrsocu2vi"/><path class="uk8tuqbzp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-loom"} {...others} />);
}

export default Component;
