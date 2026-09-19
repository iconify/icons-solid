import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.bgatx5byk {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--4fd1d9, #4fd1d9);
}

.e_ekdbbdd {
  fill: var(--svg-color--fff, #fff);
  d: path("m20.8 41.4l14.8-18.8H21.2v-5.1h22v4.9l-15 19h15.1v5.1H20.8z");
}
</style><circle class="bgatx5byk"/><path class="e_ekdbbdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:letter-z"} {...others} />);
}

export default Component;
